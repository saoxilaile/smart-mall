import requset from '@/utils/request'

// 获取搜索商品列表的数据
export const getProList = (obj) => {
  const { categoryId, goodsName, page } = obj
  return requset.get('/goods/list', {
    params: {
      categoryId,
      goodsName,
      page
    }
  })
}

// 获取商品详情数据
export const getProDetail = (goodsId) => {
  return requset.get('/goods/detail', {
    params: {
      goodsId
    }
  })
}

// 获取商品评价
export const getProComments = (goodsId, limit) => {
  return requset.get('/comment/listRows', {
    params: {
      goodsId,
      limit
    }
  })
}
