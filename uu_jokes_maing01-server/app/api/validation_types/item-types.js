/* eslint-disable */


const viewItemDtoInType = shape({
  id: id().isRequired(),
});

const addItemDtoInType = shape({
  name: string().isRequired(),
  shoppingListId: id().isRequired(),
  checkmark: boolean()
});

const listItemDtoInType = shape({
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer()
  })
});

const updateItemDtoInType = shape({
  id: id().isRequired(),
  shoppingListId: id(),
  name: string(),
  checkmark: boolean(),
  
});

const deleteItemDtoInType = shape({
  id: id().isRequired(),
});

const checkmarkItemDtoInType = shape({
  id: id().isRequired(),
  checkmark: boolean().isRequired(),
});
