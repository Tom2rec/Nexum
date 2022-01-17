package com.io.nexum.model.mappers;

import com.io.nexum.model.po.BoundedConnection;
import com.io.nexum.model.to.ConnectionWithUsersDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ConnectionWithUserHelper {
    ConnectionWithUsersMapper INSTANCE = Mappers.getMapper(ConnectionWithUsersMapper.class);
    ConnectionWithUsersDto toDto(BoundedConnection boundedConnection);

}
