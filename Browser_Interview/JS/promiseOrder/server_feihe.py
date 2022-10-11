# -*- coding: utf-8 -*-
from flask import Flask, abort, request, jsonify
from tgrocery import Grocery
from text_feihe import run
import json
import datetime
import sys
import logging

logging.basicConfig(level=logging.DEBUG,
                    format="%(asctime)s %(name)s %(levelname)s %(message)s", datefmt='%Y-%m-%d  %H:%M:%S %a')
now = datetime.datetime.now()

Modle_path = "/cluster/workspace/yangjun/lib/model/data/20190819/model_level1"
# model=''
model = Grocery(Modle_path)
model.load()
print datetime.datetime.now()-now
print "load classify model success !"
# req_num=0
# success_num=0

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/add_task/', methods=['POST'])
def add_task():
    now = datetime.datetime.now()
    # print request.json
 #   global req_num,success_num
 #   req_num+=1
  #  logging.info("Req_num: "+str(req_num))
    logging.info(str(now) + '\n' + request.get_data())
    if not request.json or 'item_id' not in request.json or 'title' not in request.json or 'content' not in request.json:
        abort(400)

    task = {
        'item_id': request.json['item_id'],
        'title': request.json['title'],
        'content': request.json['content']
    }
    res = run(task, model)
    if request.json.has_key('request_id'):
        logging.info("request_id: "+request.json['request_id']+" run_time:"+str(
            (datetime.datetime.now()-now).total_seconds()*1000))

  #  success_num+=1
  #  logging.info("Success_num: "+str(success_num))
    # tasks.append(task)
    # return jsonify(json.dumps(res,ensure_ascii=False))
    return json.dumps(res, ensure_ascii=False)


@app.route('/heartbeats/', methods=['GET'])
def heartbeats():

    task = {
        'item_id': '0',
        'title': '广西南宁一司机“蛇形走位”连续“别车” 后车司机：可能是在斗气',
        'content': '央视网消息：炎炎夏日，高温酷暑下开车容易让人心烦气躁，要是遇到一点儿不痛快就开起了“斗气”车，危险系数可能会大幅提高。前些天，广西南宁交警接到驾驶人黄先生的举报，称自己当天开车上白沙大桥的时候，遇到一辆奥迪车，它不仅在自己车子前多次“蛇形走位”，还时不时踩急刹车。每当黄先生变道，前方的这辆奥迪车都会随之变换车道，挡在黄先生的车子前，记者数了数这种情况最少出现了7次。回想起事情的原因，黄先生表示对方可能是在斗气。随后交警找到了奥迪车驾驶人罗某，经过教育，罗某对自己“别车”的行为感到十分后悔，向黄某表示了歉意，并接受罚款150元的处罚。'
    }
    res = run(task, model)

    # tasks.append(task)
    # return jsonify(json.dumps(res,ensure_ascii=False))
    return json.dumps(res, ensure_ascii=False)


p = sys.argv[1]
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=p, threaded=False)
