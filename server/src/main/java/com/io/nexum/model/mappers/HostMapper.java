package com.io.nexum.model.mappers;

import com.io.nexum.model.po.Host;
import com.io.nexum.model.to.HostDto;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = {LocationMapper.class})
public interface HostMapper {
    HostMapper INSTANCE = Mappers.getMapper(HostMapper.class);
    HostDto toDto(Host host);
}
