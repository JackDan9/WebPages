# -*- coding: utf-8 -*-

from datetime import datetime
import json
import logging
import sys

from flask import Flask, abort, request, jsonify
from tgrocery import Grpcery


model_path = ""

model = Grpcery(model_path)
model.load()


app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World'


@app.route('/add_task/', methods=['POST'])
def add_task():
    prev_time = datetime.now()

    if not request.json or \
        'item_id' not in request.json or \
            'title' not in request.json or \
            'content' not in request.json:
        abort(400)

    task = {
        'item_id': request.json['item_id'],
        'title': request.json['title'],
        'content': request.json['content']
    }

    res = run(task, model)

    if request.json.has_key('request_id'):
        logging.info("request_id: " + request.json['request_id'] + " run_time: " + str(
            (datetime.now() - prev_time).total_seconds() * 1000
        ))

    return json.dumps(res, ensure_ascii=False)
