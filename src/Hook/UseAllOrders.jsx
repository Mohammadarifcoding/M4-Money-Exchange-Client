
import UseAxious from './UseAxious';
import { useQuery } from '@tanstack/react-query';

const UseAllOrders = () => {
    const Axious  = UseAxious()


    const {data:AllOrder = [],refetch:RefetchAllOrder} = useQuery({
        queryKey:['AllOrder'],
        queryFn:async()=>{
            const result = await Axious.get('/allOrders')
          return result.data
        }
    })
    return [AllOrder,RefetchAllOrder]
};

export default UseAllOrders;