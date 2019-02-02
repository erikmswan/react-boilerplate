
export const postPlaceholder = (
  { request, serviceHosts },
  data
) => request({
  path: '/v1/placeholder',
  service: serviceHosts.serviceHost1,
  method: 'POST',
  data
});

export const getPlaceholder = (
  { request, serviceHosts },
  limit = 30
) => request({
  path: `/v1/placeholder`,
  service: serviceHosts.serviceHost1,
  method: 'GET',
  auth: false,
  params: {
    limit
  }
});

export const updatePlaceholder = (
  { request, serviceHosts },
  newPlaceholder
) => request({
  path: `/v1/placeholder`,
  service: serviceHosts.serviceHost1,
  method: 'PUT',
  data: newPlaceholder
});

export const deletePlaceholder = (
  { request, serviceHosts },
  placeholderId
) => request({
  path: `/v1/placeholder`,
  service: serviceHosts.serviceHost1,
  method: 'DELETE',
  params: {
    placeholderId
  }
});
