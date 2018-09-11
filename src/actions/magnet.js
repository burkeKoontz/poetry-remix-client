export const ADD_MAGNET = 'ADD_MAGNET';
export function addMagnet(id, magnet) {
  return {
    type: ADD_MAGNET,
    id,
    magnet
  };
}

export const CHANGE_MAGNET_LOCATION = 'CHANGE_MAGNET_LOCATION';
export function changeMagnetLocation(id, magnet) {
  return {
    type: ADD_MAGNET,
    id,
    magnet
  };
}