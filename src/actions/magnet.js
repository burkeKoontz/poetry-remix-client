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
    type: CHANGE_MAGNET_LOCATION,
    id,
    magnet
  };
}

export const DELETE_MAGNET = 'DELETE_MAGNET';
export function deleteMagnet(id) {
  return {
    type: DELETE_MAGNET,
    id,
  };
}

export const CLEAR_MAGNETS = 'CLEAR_MAGNETS';
export function clearMagnets() {
  return {
    type: CLEAR_MAGNETS,
  };
}
