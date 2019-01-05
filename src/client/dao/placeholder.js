
export const postPlaceholder = (
  self,
  data
) => self.request({
  url: `${self.serviceHosts.apiHost}/v1/placeholder`,
  method: 'POST',
  auth: true,
  data
});

export const getPlaceholder = (
  self,
  limit = 30
) => self.request({
  url: `${self.serviceHosts.apiHost}/v1/placeholder`,
  method: 'GET',
  params: {
    limit
  }
});
