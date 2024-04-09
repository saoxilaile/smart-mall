import request from '@/utils/request'

export const addAddress = (name, phone, region, detail) => {
  return request.post('/address/add', {
    form: {
      name,
      phone,
      detail,
      region
    }
  })
}
