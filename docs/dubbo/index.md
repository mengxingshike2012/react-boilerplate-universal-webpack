__所有时间戳为微秒(ms)__

# 数据模型

## 分页请求     

```
class Paginator {
    int page;
    int size;
}
```

## 分页结果

```
class PagedResult<T> {
    int page;
    int size;
    int total;
    T[] data;
}
```

## 排序请求

```
class Sorter {
    String[] sortBy;
    int order; // 0 ascend 1 decend
}
```

## 订单

```
class Order {
    OrderInfo info;
    ShippingInfo shipping;
    Charge charge;
    Shop shop;
    Rider rider;
}
```

```
class OrderInfo {
    String comment; //订单备注
    int source; //订单来源
    int cancelSource; //取消订单来源
    String channelId; //渠道流水号
    int placeTime; 下单时间
    int finishTime; //完成时间
    int dispatchMode; //调度模式
}
```

```
class Charge {
    double riderBase;    // 骑手基础运费
    double riderByDistance; // 骑手距离加成
    double riderByTime; // 骑手时间加成

    double shopBase;    // 商家基础运费
    double shopByDistance; // 商家距离加成
    double shopByTime; // 商家时间加成
}
```

#运单

```
class ShippingInfo {
}
```

```
```

# 订单服务

```
class OrderCriteria {
    int cityId;
    String allianceName; //加盟商名字
    int regionId; //区域id
    int orderId; //订单id
    int orderStatus: //订单状态
    int placeTime; //下单时间戳
    int finishTime; //送达时间
    int storeId; //商家Id
    String storeName; //商家名称
    int riderId; //骑手Id
    String riderName; //骑手名称
    String shippingAddress; //收货地址
}
```

```
class OrderService {
    //模糊搜索
    search(OrderCriteria searchCriteria, Paginator paginator, ): PagedResult<Order>;
    //精确匹配
    match()OrderCriteria matchCriteria, Paginator paginator): PagedResult<Order>;
    //重新派单
    reDispatchOrder(int orderId, int riderId): Order;
    //取消订单
    cancelOrder(int orderId): void;
    //快速搜索
    quickSearchById(int orderId): String[]
    //派单
    dispatchOrder(int[] orderIds, int riderId): Order;
}
```

# 运单服务

```
class ShippingService {
    //根据订单获取运单
    getByOrderId(int orderId): Shipping;
}
```

# 骑手服务

> Rider结构待商议

```
class RiderCriteria {
    int cityId;
    String allianceName; //加盟商名字
    int regionId; //区域Id
    int positionType; //全职/兼职 枚举
    int workingStatus; //工作状态 枚举(工作中, 休息中)
    int accountStatus; //账号状态 枚举(正常, 禁用)
    int riderId; //骑手Id
    String riderName; //骑手姓名
    String phone; //骑手电话
}
```

```
class RiderService {
    //模糊搜索
    search(RiderCriteria searchCriteria, Paginator paginator): PagedResult<Rider>;
    //精确匹配
    match()RiderCriteria matchCriteria, Paginator paginator): PagedResult<Rider>;
    create(Rider rider): Rider;
    modify(Rider rider): Rider;
}
```

# 商家服务

> Shop结构待商议

```
class ShopCriteria {
    int cityId;
    String allianceName; //加盟商名字
    int regionId; //区域Id
    int storeId; //商家Id
    String storeName; //商家名称
    String address; //商家地址
    int auditStatus; //审核状态 枚举(未认证, 审核通过, 审核中, 审核拒绝)
    int accountStatus; //账号状态 枚举(正常, 禁用)
    String accountPhone; //注册手机号
}
```

```
class ShopService {
    //模糊搜索
    search(ShopCriteria searchCriteria, Paginator paginator): PagedResult<Shop>;
    //精确匹配
    match()ShopCriteria matchCriteria, Paginator paginator): PagedResult<Shop>;
    create(Shop store): Shop;
    modify(Shop store): Shop;
}
```

# 投诉服务


```
class ComplainCriteria {
    int cityId;
    String allianceName; //加盟商名字
    int regionId; //区域Id
    int placeTime; //创建时间
    String storeName; //商家名称
    int storeId; //商家Id
    String riderName; //
    int complainId; //投诉Id
    int status; //状态 枚举(待处理, 成立, 不成立)
}
```

```
class ComplainService {
    //模糊搜索
    search(ComplainCriteria searchCriteria, Paginator paginator): PagedResult<Complain>;
    //精确匹配
    match()ComplainCriteria matchCriteria, Paginator paginator): PagedResult<Complain>;
    create(Complain complain): Complain;
    modify(Complain complain): Complain;
}
```

# 子账号服务

```
class SubAccountCriteria {
    int cityId;
    String allianceName; //加盟商名字
    int regionId; //区域Id
    String name;
    String phone;
    int role;
}
```

```
class SubAccountService {
    //模糊搜索
    search(SubAccountCriteria searchCriteria, Paginator paginator): PagedResult<SubAccount>;
    //精确匹配
    match()SubAccountCriteria matchCriteria, Paginator paginator): PagedResult<SubAccount>;
    create(SubAccount account): SubAccount;
    modify(SubAccount account): SubAccount;
}
```

