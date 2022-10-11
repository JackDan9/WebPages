# -*- coding: utf-8 -*-
import jieba_fast.analyse
import jieba_fast.posseg as posseg
import jieba_fast as jieba
from lib.Addrs.Addrs import recog_one
from tgrocery import Grocery
import logging
import datetime
import signal
import time
import math
import re
from gensim.summarization import keywords
logging.basicConfig(level=logging.DEBUG)
#Modle_path="/cluster/workspace/yangjun/lib/model/data/20190819/model_level1"
#model=Grocery(Modle_path)
#model.load()
jieba_fast.analyse.set_stop_words("/cluster/workspace/yangjun/stopword_punc.dat")
jieba_fast.load_userdict("/cluster/workspace/yangjun/user_dict/user_dict.txt")
jieba_fast.del_word('次列车')
jieba_fast.del_word('美前')
jieba_fast.del_word('处略')
jieba_fast.del_word('首歌曲')
jieba_fast.del_word('嘴里塞')
jieba_fast.del_word('级新生')
jieba_fast.del_word('宝马新')
def GetKeyWord(text,topk=20,model='TFIDF',POS=True):
    #jieba_fast.analyse.set_idf_path('idf_news')
    #tmp=jieba_fast.analyse.textrank(text,topK=topk, withWeight=True,allowPOS=('ns', 'n', 'nt', 'nz','nr','vn'))
    #tmp=jieba_fast.analyse.textrank(text,topK=topk,allowPOS=('ns', 'n', 'nt', 'nz','nr','vn'))
    #pos=('ns', 'n', 'nt', 'nz','nr','vn')
    pos=('n','nrt','nrfg','Eng','j','ns', 'nt', 'nz','nr','nus','nutv','nur','nut','nun','nu','nuz','numusic','nubook','nutitle')
    if model=='TFIDF':
        if POS:
            tmp=jieba_fast.analyse.extract_tags(text, topK=topk, withWeight=True, allowPOS=pos)
        else:
            tmp=jieba_fast.analyse.extract_tags(text, topK=topk, withWeight=True, allowPOS=())
    elif model=='TEXTRANK':
        if POS:
            tmp=jieba_fast.analyse.textrank(text,topK=topk, withWeight=True,allowPOS=pos)
        else:
            tmp=jieba_fast.analyse.textrank(text,topK=topk, withWeight=True)
    elif model=='MIX':
        t1=jieba_fast.analyse.extract_tags(text, topK=topk, withWeight=True, allowPOS=pos)
        t2=jieba_fast.analyse.textrank(text,topK=topk, withWeight=True,allowPOS=pos)
        tmp1=0.0
        tmp2=0.0
        for item in t1:
            tmp1+=math.exp(item[1])
        for item in t2:
            tmp2+=math.exp(item[1])
        res={}
        for item in t1:
            res[item[0]]=math.exp(item[1])/tmp1
        for item in t2:
            if item[0] in res.keys():
                res[item[0]]+=math.exp(item[1])/tmp2
            else:
                res[item[0]]=math.exp(item[1])/tmp2
        tmp=sorted(res.items(), key = lambda d:d[1],reverse = True)[:topk]
    #tmp=jieba.analyse.extract_tags(text, topK=topk, withWeight=True, allowPOS=('ns', 'n', 'nt', 'nz','nr','vn'))
    res=[]
    norm=0.0
    for it in tmp:
        norm+=math.exp(it[1])

    for it in tmp:
        res.append(it[0]+":"+str(math.exp(it[1])/norm))
    return ",".join(res)

def GetNer_jieba(text):
    res_person=[]
    res_place=[]
    res_org=[]
    res_tv=[]
    res_others=[]
    if len(text)==0:
        return res
    tmp=posseg.lcut(text,HMM=False)
    for word,flag in tmp:
        if (flag.startswith("nru") or flag.startswith("nur"))and len(word)>1:
            res_person.append(word)
        elif (flag.startswith("nsu") or flag.startswith("nus") or flag.startswith("nun")) and len(word)>1:
            res_place.append(word)
        elif (flag.startswith("nt") or flag=='nut') and len(word)>1:
            res_org.append(word)
        elif flag.startswith("nutv") and len(word)>1:
            res_tv.append(word)
        elif (flag.startswith("nz") or flag.startswith("nuz"))and len(word)>1:
            res_others.append(word)
    res_person=list(set(res_person))
    res_place=list(set(res_place))
    res_tv=list(set(res_tv))
    res_org=list(set(res_org))
    res_others=list(set(res_others))
    return res_person,res_place,res_org,res_tv,res_others

def GetLocation(title,summary):
    if title != '':
        result = recog_one(title)
        province = result['province']
        city = result['city']
        area = result['area']
    else:
        return ""
    if province=="" and city=="":
          if summary != '':
              result = recog_one(summary)
              province = result['province']
              city = result['city']
              area = result['area']
    if province!="" and province:
        t=province+':0.03'
        if city!="" and city:
            t+=","
            t+=city+':0.03'
        return t
    else:
        return ""
def GetCategory_v1_4pd(text,model,top=3):
    predict_result=model.predict(text)
    predict_result.dec_values=sorted(predict_result.dec_values.iteritems(), key=lambda d: d[1],reverse=True)
    temp=0.0
    for tp in predict_result.dec_values:
        temp+=math.exp(tp[1])
    res=[]
    i=0
    for item in predict_result.dec_values:
        if i<top:
            res.append(str(item[0])+':'+str(math.exp(item[1])/temp))
            i+=1
        else:
            break
    return ",".join(res)
def handler(signum, frame):
    raise AssertionError
def run(text_json,model):
    res={}
    item_id=text_json['item_id']
    res['item_id']=item_id
    title=text_json['title']
    tmp=re.sub(r'<[^<]+>',"",text_json['content'])
    content=tmp.replace("\n",' ').replace("&nbsp","")
    #summary=text_json['content'][:100].replace("\n",' ')
    now=datetime.datetime.now()
    res['title_keyword']=GetKeyWord(title,topk=5,model='MIX')
    logging.info("item_id:"+item_id+":"+"title keyword run_time:"+str((datetime.datetime.now()-now).total_seconds()*1000))
    now=datetime.datetime.now()
    res['content_keyword']=GetKeyWord(content,topk=10,model='MIX')
    logging.info("item_id:"+item_id+":"+"content keyword run_time:"+str((datetime.datetime.now()-now).total_seconds()*1000)+":len:"+str(len(content)))
    now=datetime.datetime.now()
    res['category_v1_4pd']=GetCategory_v1_4pd(title+" "+content,model).decode('utf-8')
    logging.info("item_id:"+item_id+":"+"category run_time:"+str((datetime.datetime.now()-now).total_seconds()*1000)+":len:"+str(len(content)))
    now=datetime.datetime.now()
    res_person,res_place,res_org,res_tv,res_others=GetNer_jieba(title+" "+content)
    res['ner_person']=",".join(res_person)
    res['ner_place']=",".join(res_place)
    res['ner_org']=",".join(res_org)
    res['ner_others']=",".join(res_others)

    #res['ner']=GetLocation(title,summary)
    logging.info("item_id:"+item_id+":"+"ner run_time:"+str((datetime.datetime.now()-now).total_seconds()*1000))
    return res
def test():
    t={}
    t['item_id']='123'
    t['itemSet_id']='112'
    t['title']=u'英国主编：中国的健康经济正在飞速进步'
    t['content']=u"“中国的健康经济正在飞速进步”——访《柳叶刀》主编理查德·霍顿本报驻英国记者 强 薇霍顿认为，新中国成立以来在医学研究和发展方面取得了诸多成就，特别是不断深化的医疗改革令世人瞩目。中国健康和医学研究人员正以非凡的、鼓舞人心的方式推动卫生事业向前发展。霍顿表示，他真切感受到了中国政府致力于提高人民健康水平和促进繁荣的责任担当。英国医学杂志《柳叶刀》主编理查德·霍顿对中国有着友好感情。他近日接受本报记者采访时表示，大约10年前，他和同事们发现，来自中国医学研究人员的投稿数量不断增加。仅仅几年，中国研究人员的投稿量已经排名世界第三，仅次于英国和美国，而且投稿的质量也大幅提升。“这一巨大变化说明中国已跻身科学研究大国行列，这引起了我观察该变化的兴趣。我非常希望了解中国成功的秘诀以及中国如何提高医疗健康水平。”“以前《柳叶刀》的研究重点多以欧美国家为主，但现在重心发生了变化。这是中国政府积极推动科研创新的结果。”这些变化令霍顿感到惊喜。今年第一期《柳叶刀·血液病学》的封面就是中国国家癌症中心、中国医学科学院肿瘤医院开展的国产PD—1单抗治疗复发或难治性经典型霍奇金淋巴瘤的相关研究成果。为了更深入地接触中国医学领域科研工作者和临床医生，了解中国医疗事业发展的情况，在霍顿的推动下，《柳叶刀》推出了中文版，密切关注中国的卫生事业发展，并将亚洲唯一的办公室设在了中国。“我希望通过《柳叶刀》这个平台，与中国同行一道向世界讲述好中国故事。”霍顿认为，新中国成立以来在医学研究和发展方面取得了诸多成就，特别是不断深化的医疗改革令世人瞩目。“医疗改革将覆盖全民健康的医疗体系置于国家发展目标的中心位置，这非常重要。”在霍顿看来，这一努力与中国的政策紧密相关。中国加大对医学科学研究的投入，产出了更多的研究成果，促进医疗改革的发展。中国可以为世界上许多国家提供宝贵经验。“中国的健康经济正在飞速进步。中国健康和医学研究人员正以非凡的、鼓舞人心的方式推动卫生事业向前发展。”基于对中国医疗事业的长期研究，霍顿总结出中国的成功经验：首先，中国教育投入巨大，尤其是对高校的扶持。中国不少高校的科研能力如今已达到世界一流水平。其次，中国将科学研究作为发展愿景的核心部分。许多国家缺乏对科学的关注，但中国深知科学可以成为社会快速进步的不竭动力。第三，中国将其发展经济的成功经验应用于医疗事业。最后，中国的医生和科研工作者通过与世界各地的同行交流，建立了强大的合作关系，丰富了他们自身的技能和专业知识。访问中国时，霍顿常常被中国学者和医务从业者对事业的投入和敬业精神所感动。“在这些医疗工作者和研究者身上，我真切感受到了中国政府致力于提高人民健康水平和促进繁荣的责任担当。”《柳叶刀》创立者托马斯·威克利在杂志创刊时曾表示：“柳叶刀犹如拱形窗口，让光亮透入;或亦是锋利的手术刀，以切除陈杂。我意谓《柳叶刀》赋有上述双重含义。”在霍顿看来，中国在医学研究方面取得巨大成就，实现了威克利对《柳叶刀》的寄语。“中国对于医学研究事业的努力有如一束光亮，飞速发展进步的健康事业为广大病患‘切除陈杂’。”霍顿表示：“中国正进行更深层次的医疗改革并进一步加强医学研究体系建设，我对此充满信心。通过《柳叶刀》杂志，我们正与中国学者通力合作，共同努力实现威克利设想的目标。我们非常期待与中国科学家和机构进一步加强合作，让《柳叶刀》成为讲述中国故事的平台。”(本报伦敦电)"

    for i in range(0,10000):
        run(t,model)
        break

#import datetime
#now= datetime.datetime.now()
#test()
#print datetime.datetime.now()-now
#print GetLocation('广西南宁一司机“蛇形走位”连续“别车” 后车司机：可能是在斗气','')