package com.io.nexum.model.mappers;

import com.io.nexum.model.po.Connection;
import com.io.nexum.model.to.ConnectionDto;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;


@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = {ActivityMapper.class, LocationMapper.class})
public interface ConnectionMapper {
    ConnectionMapper INSTANCE = Mappers.getMapper(ConnectionMapper.class);
    ConnectionDto toDto(Connection connection);

}
