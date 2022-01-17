package com.io.nexum.model.mappers;

import com.io.nexum.model.po.BoundedConnection;
import com.io.nexum.model.to.ConnectionWithUsersDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.Set;

@Mapper(uses = {ConnectionMapper.class, UserMapper.class, ConnectionWithUserHelper.class})
public interface ConnectionWithUsersMapper {
    ConnectionWithUsersMapper INSTANCE = Mappers.getMapper(ConnectionWithUsersMapper.class);
    Set<ConnectionWithUsersDto> toDto(Set<BoundedConnection> boundedConnections);

}
