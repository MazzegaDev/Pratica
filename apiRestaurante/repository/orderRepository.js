let orderDB = [];

export default class OrderRepository {

    listOrder(){
        return orderDB;
        
    }

    newOrder(newOrder){
        orderDB.push(newOrder);
        return true;
    }

    searchID(id){
        let idArr = orderDB.filter((x) => x.id == id);
        return idArr.length > 0;
    }

    deleteOrder(id){
        orderDB = orderDB.filter((x) => x.id != id);
    }

    updateOrder(updatedOrder){
        orderDB.forEach((x,index) => {
            if(x.id == updatedOrder.id){
                orderDB[index] = updatedOrder
            }
        })
    }
}
