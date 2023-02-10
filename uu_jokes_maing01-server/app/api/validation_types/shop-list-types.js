/* eslint-disable */

const viewDtoInType = shape({
    id: id().isRequired(),
  });
  
  const addDtoInType = shape({
    name : string().isRequired(),
  });
  
  const listDtoInType = shape({
    pageInfo: shape({
      pageIndex: integer(),
      pageSize: integer()
    })
  });
  
  const deleteDtoInType = shape({
    id: id().isRequired(),
  });

  const shopListItemsDtoInType = shape({
    id: id().isRequired(),
  });