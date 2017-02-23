module.exports = {
    "/api/auth/login": {
        "post": "postAuthLogin"
    },
    "/api/auth/password": {
        "post": "postAuthPassword"
    },
    "/api/auth/reset/code": {
        "get": "getAuthResetCode"
    },
    "/api/auth/reset/password": {
        "post": "postAuthResetPassword"
    },
    "/api/complain/:id": {
        "put": "putComplainById"
    },
    "/api/complain": {
        "get": "getComplain",
        "post": "postComplain"
    },
    "/api/franchisee/:id/start": {
        "post": "postFranchiseeByIdStart"
    },
    "/api/franchisee/:id/stop": {
        "post": "postFranchiseeByIdStop"
    },
    "/api/franchisee/:id": {
        "put": "putFranchiseeById"
    },
    "/api/franchisee": {
        "get": "getFranchisee",
        "post": "postFranchisee"
    },
    "/api/login": {
        "post": "postLogin"
    },
    "/api/order/cancel/:id": {
        "post": "postOrderCancelById"
    },
    "/api/order/redispatch/:id": {
        "post": "postOrderRedispatchById"
    },
    "/api/order/:id": {
        "get": "getOrderById"
    },
    "/api/order": {
        "get": "getOrder"
    },
    "/api/region/city/list": {
        "get": "getRegionCityList"
    },
    "/api/region/city/:id/publish": {
        "post": "postRegionCityByIdPublish"
    },
    "/api/region/city/:id/published": {
        "get": "getRegionCityByIdPublished"
    },
    "/api/region/city/:id/unpublish": {
        "post": "postRegionCityByIdUnpublish"
    },
    "/api/region/city/:id/unpublished": {
        "get": "getRegionCityByIdUnpublished",
        "delete": "deleteRegionCityByIdUnpublished",
        "post": "postRegionCityByIdUnpublished"
    },
    "/api/region/city/:id": {
        "get": "getRegionCityById"
    },
    "/api/region/city": {
        "get": "getRegionCity",
        "post": "postRegionCity"
    },
    "/api/region/:id": {
        "get": "getRegionById",
        "post": "postRegionById"
    },
    "/api/rider/disable/:id": {
        "post": "postRiderDisableById"
    },
    "/api/rider/dispatch/:id": {
        "post": "postRiderDispatchById"
    },
    "/api/rider/enable/:id": {
        "post": "postRiderEnableById"
    },
    "/api/rider/:id": {
        "get": "getRiderById",
        "delete": "deleteRiderById",
        "put": "putRiderById"
    },
    "/api/rider": {
        "get": "getRider",
        "post": "postRider"
    },
    "/api/role/:id/{userId}": {
        "post": "postRoleByIdByUserId",
        "delete": "deleteRoleByIdByUserId"
    },
    "/api/role/:id": {
        "get": "getRoleById"
    },
    "/api/role": {
        "get": "getRole"
    },
    "/api/rule/dispatch": {
        "get": "getRuleDispatch",
        "post": "postRuleDispatch"
    },
    "/api/rule/:regionId/charge/base": {
        "post": "postRuleByRegionIdChargeBase"
    },
    "/api/rule/:regionId/charge/distance": {
        "post": "postRuleByRegionIdChargeDistance"
    },
    "/api/rule/:regionId/charge/time": {
        "post": "postRuleByRegionIdChargeTime"
    },
    "/api/rule/:regionId/charge": {
        "get": "getRuleByRegionIdCharge",
        "delete": "deleteRuleByRegionIdCharge"
    },
    "/api/rule/:regionId/evaluation": {
        "get": "getRuleByRegionIdEvaluation",
        "post": "postRuleByRegionIdEvaluation",
        "delete": "deleteRuleByRegionIdEvaluation"
    },
    "/api/rule/:regionId/payment/base": {
        "post": "postRuleByRegionIdPaymentBase"
    },
    "/api/rule/:regionId/payment/distance": {
        "post": "postRuleByRegionIdPaymentDistance"
    },
    "/api/rule/:regionId/payment/time": {
        "post": "postRuleByRegionIdPaymentTime"
    },
    "/api/rule/:regionId/payment": {
        "get": "getRuleByRegionIdPayment",
        "delete": "deleteRuleByRegionIdPayment"
    },
    "/api/shop/:id/balance": {
        "put": "putShopByIdBalance"
    },
    "/api/shop/:id/disable": {
        "post": "postShopByIdDisable"
    },
    "/api/shop/:id/enable": {
        "post": "postShopByIdEnable"
    },
    "/api/shop/:id": {
        "get": "getShopById",
        "put": "putShopById",
        "delete": "deleteShopById"
    },
    "/api/shop": {
        "get": "getShop"
    },
    "/api/subaccount/:id": {
        "delete": "deleteSubaccountById",
        "put": "putSubaccountById"
    },
    "/api/subaccount": {
        "get": "getSubaccount",
        "post": "postSubaccount"
    }
}