export const ADD_MAGNET = 'ADD_MAGNET';
export function addMagnet(magnet) {
  return {
    type: ADD_MAGNET,
    magnet
  };
}
