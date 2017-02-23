module.exports = {
    "Charge": {
        "type": "object",
        "properties": {
            "rider": {
                "type": "object",
                "properties": {
                    "base": {
                        "type": "number"
                    },
                    "distance": {
                        "type": "number"
                    },
                    "time": {
                        "type": "number"
                    }
                }
            },
            "shop": {
                "type": "object",
                "properties": {
                    "base": {
                        "type": "number"
                    },
                    "distance": {
                        "type": "number"
                    },
                    "time": {
                        "type": "number"
                    }
                }
            }
        }
    },
    "Complain": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer"
            },
            "order": {
                "$ref": "#/definitions/Order"
            },
            "shop": {
                "$ref": "#/definitions/Shop"
            },
            "rider": {
                "$ref": "#/definitions/Rider"
            },
            "comment": {
                "type": "string"
            },
            "createdAt": {
                "type": "integer"
            },
            "reason": {
                "type": "string"
            },
            "status": {
                "type": "integer",
                "enum": [
                    0,
                    1,
                    2
                ]
            },
            "result": {
                "type": "string"
            }
        }
    },
    "DispatchRule": {
        "type": "object",
        "properties": {
            "dispatch": {
                "description": "智能派单",
                "type": "object",
                "properties": {
                    "enabled": {
                        "type": "boolean"
                    },
                    "value": {
                        "description": "降价金额",
                        "type": "number"
                    },
                    "throttle": {
                        "description": "调节值(低, 中, 高)",
                        "type": "integer",
                        "enum": [
                            0,
                            1,
                            2
                        ]
                    }
                }
            },
            "merge": {
                "description": "智能合单",
                "type": "object",
                "properties": {
                    "enabled": {
                        "type": "boolean"
                    },
                    "value": {
                        "description": "降价金额",
                        "type": "number"
                    },
                    "throttle": {
                        "description": "调节值(低, 中, 高)",
                        "type": "integer",
                        "enum": [
                            0,
                            1,
                            2
                        ]
                    }
                }
            },
            "riderPick": {
                "description": "抢单",
                "type": "object",
                "properties": {
                    "enabled": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "EvaluationRule": {
        "type": "object",
        "properties": {
            "rider": {
                "description": "骑手考核规则",
                "type": "object",
                "properties": {
                    "arrive": {
                        "description": "基础到店时间",
                        "type": "number"
                    },
                    "finish": {
                        "description": "基础送达时间",
                        "type": "number"
                    },
                    "arriveTimeoutPenalty": {
                        "description": "'到店时间'大于'基础到店时间'的扣罚金额",
                        "type": "number"
                    },
                    "finishTimeoutPenalty": {
                        "description": "'送达时间'大于'基础送达时间'的扣罚金额",
                        "type": "number"
                    },
                    "cancel": {
                        "description": "取消订单相关规则",
                        "type": "object",
                        "properties": {
                            "allow": {
                                "description": "是否允许骑手取消订单",
                                "type": "boolean"
                            },
                            "time": {
                                "description": "取消订单'T'值",
                                "type": "number"
                            },
                            "intimePenalty": {
                                "description": "'T'值(分钟)以内, 取消, 扣除金额值",
                                "type": "number"
                            },
                            "timeoutPenalty": {
                                "description": "'T'值(分钟)之后, 取消, 扣除金额值",
                                "type": "number"
                            }
                        }
                    }
                }
            },
            "shop": {
                "description": "商家取消订单相关考核规则",
                "type": "object",
                "properties": {
                    "cancelDispatchedPenalty": {
                        "description": "已接单, 未超出基础到店时间, 扣罚金额",
                        "type": "number"
                    },
                    "cancelDispatchedTimeoutPenalty": {
                        "description": "已接单, 超出基础到店时间, 扣罚金额",
                        "type": "number"
                    },
                    "cancelArrivedPenalty": {
                        "description": "已到店, 扣罚金额",
                        "type": "number"
                    }
                }
            },
            "timer": {
                "description": "系统超时提醒",
                "type": "object",
                "properties": {
                    "pendingNotification": {
                        "description": "超出x(分钟)没有接单, 标志为滞留单, 同时人工调度系统中提醒",
                        "type": "number"
                    },
                    "pendingCancellation": {
                        "description": "超出x(分钟)没有接单, 则系统取消订单",
                        "type": "number"
                    },
                    "arrivingNotification": {
                        "description": "超出x(分钟)未到店, 标志为滞留单, 同时人工调度系统中提醒",
                        "type": "number"
                    },
                    "arrivingCancellation": {
                        "description": "超出x(分钟)未到店, 则系统取消订单",
                        "type": "number"
                    },
                    "leavingNotification": {
                        "description": "超出x(分钟)未离店, 标志为滞留单, 同时人工调度系统中提醒",
                        "type": "number"
                    },
                    "leavingCancellation": {
                        "description": "超出x(分钟)未离店, 则系统取消订单",
                        "type": "number"
                    },
                    "finishingNotification": {
                        "description": "超出x(分钟)未送达, 标志为滞留单, 同时人工调度系统中提醒",
                        "type": "number"
                    },
                    "finishingCancellation": {
                        "description": "超出x(分钟)未送达, 则系统取消订单",
                        "type": "number"
                    }
                }
            }
        }
    },
    "Franchisee": {
        "type": "object",
        "properties": {
            "id": {
                "type": "number"
            },
            "phone": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "identityNumber": {
                "description": "身份证号",
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "companyName": {
                "type": "string"
            },
            "address": {
                "type": "string"
            },
            "account": {
                "type": "object",
                "properties": {
                    "number": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "bank": {
                        "type": "string"
                    }
                }
            },
            "signedDate": {
                "type": "number"
            },
            "effectiveDate": {
                "type": "number"
            },
            "region": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            }
        }
    },
    "LoginCredential": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            }
        }
    },
    "Order": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer"
            },
            "shop": {
                "$ref": "#/definitions/Shop"
            },
            "rider": {
                "$ref": "#/definitions/Rider"
            },
            "shipping": {
                "$ref": "#/definitions/Shipping"
            },
            "charge": {
                "$ref": "#/definitions/Charge"
            },
            "info": {
                "$ref": "#/definitions/OrderInfo"
            }
        }
    },
    "OrderInfo": {
        "type": "object",
        "properties": {
            "comment": {
                "description": "订单备注",
                "type": "string"
            },
            "source": {
                "description": "订单来源",
                "type": "integer"
            },
            "cancelSource": {
                "description": "取消订单来源",
                "type": "integer"
            },
            "channelId": {
                "description": "渠道流水号",
                "type": "string"
            },
            "placeTime": {
                "description": "下单时间",
                "type": "integer"
            },
            "finishTime": {
                "description": "完成时间",
                "type": "integer"
            },
            "dispatchMode": {
                "type": "integer",
                "description": "抢单模式",
                "enum": [
                    1,
                    2
                ]
            }
        }
    },
    "Paginator": {
        "type": "object",
        "properties": {
            "page": {
                "type": "integer",
                "m-min": 0,
                "m-max": 10
            },
            "size": {
                "type": "integer",
                "m-min": 0,
                "m-max": 10
            },
            "total": {
                "type": "integer",
                "m-min": 5,
                "m-max": 100
            }
        }
    },
    "PaymentRule": {
        "type": "object",
        "properties": {
            "base": {
                "description": "基础收费",
                "type": "number"
            },
            "distance": {
                "description": "里程阶梯收费",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/PaymentRuleByDistance"
                }
            },
            "time": {
                "description": "时间阶梯收费",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/PaymentRuleByTime"
                }
            }
        }
    },
    "PaymentRuleByDistance": {
        "type": "object",
        "properties": {
            "startDistance": {
                "description": "距离范围(米)开始值",
                "type": "number"
            },
            "endDistance": {
                "description": "距离范围(米)结束值",
                "type": "number"
            },
            "pricePerUnit": {
                "description": "单位里程费(元/里程刻度)",
                "type": "number"
            },
            "unit": {
                "description": "里程刻度(米)",
                "type": "number"
            }
        }
    },
    "PaymentRuleByTime": {
        "type": "object",
        "properties": {
            "startTime": {
                "description": "时段范围('00:00')开始",
                "type": "string"
            },
            "endTime": {
                "description": "时段范围('00:00')结束",
                "type": "string"
            },
            "price": {
                "description": "时段金额",
                "type": "number"
            },
            "tag": {
                "description": "时段标签(宵夜, 午高峰, 晚高峰)",
                "type": "integer",
                "enum": [
                    0,
                    1,
                    2
                ]
            },
            "day": {
                "description": "适用日期(星期几)",
                "type": "array",
                "items": {
                    "type": "integer",
                    "enum": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7
                    ]
                }
            }
        }
    },
    "RegionData": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer"
            }
        }
    },
    "Rider": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer"
            },
            "regionId": {
                "type": "integer"
            },
            "position": {
                "description": "全职/兼职",
                "type": "integer",
                "enum": [
                    0,
                    1
                ]
            },
            "workStatus": {
                "description": "工作状态, 工作中/休息中",
                "type": "integer",
                "enum": [
                    0,
                    1
                ]
            },
            "accountStatus": {
                "description": "账号状态, 正常/禁用",
                "type": "integer",
                "enum": [
                    0,
                    1
                ]
            },
            "name": {
                "type": "string"
            },
            "phone": {
                "type": "string"
            },
            "idNumber": {
                "description": "身份证号",
                "type": "string"
            }
        }
    },
    "Role": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "members": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string"
                        },
                        "id": {
                            "type": "string"
                        }
                    }
                }
            }
        }
    },
    "Shipping": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer"
            }
        }
    },
    "Shop": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer"
            },
            "regionId": {
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "address": {
                "type": "string"
            },
            "geo": {
                "description": "地理位置",
                "type": "object",
                "properties": {
                    "lat": {
                        "type": "number"
                    },
                    "lng": {
                        "type": "number"
                    }
                }
            },
            "account": {
                "type": "object",
                "properties": {
                    "phone": {
                        "description": "注册手机号",
                        "type": "string"
                    },
                    "registerTime": {
                        "description": "注册时间",
                        "type": "integer"
                    }
                }
            },
            "audit": {
                "type": "object",
                "properties": {
                    "time": {
                        "description": "审核时间",
                        "type": "integer"
                    },
                    "status": {
                        "description": "审核状态",
                        "type": "integer"
                    },
                    "pid": {
                        "description": "身份证",
                        "type": "object",
                        "properties": {
                            "number": {
                                "description": "身份证号",
                                "type": "string"
                            },
                            "image": {
                                "description": "身份证片",
                                "type": "object",
                                "properties": {
                                    "front": {
                                        "description": "正面照",
                                        "type": "string"
                                    },
                                    "back": {
                                        "description": "反面照",
                                        "type": "string"
                                    },
                                    "hand": {
                                        "description": "手持照",
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "balance": {
                "description": "账户余额",
                "type": "number"
            }
        }
    },
    "SubAccount": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer",
                "m-min": 0,
                "m-max": 999
            },
            "regionId": {
                "description": "区域Id",
                "type": "integer",
                "m-min": 0,
                "m-max": 999
            },
            "name": {
                "type": "string"
            },
            "phone": {
                "type": "string",
                "m-pool": "0123456789",
                "m-length": 11
            },
            "role": {
                "description": "角色, 暂时只有站长",
                "type": "integer",
                "enum": [
                    0
                ]
            },
            "idNumber": {
                "description": "身份证号",
                "type": "string"
            },
            "email": {
                "type": "string"
            }
        }
    }
};
