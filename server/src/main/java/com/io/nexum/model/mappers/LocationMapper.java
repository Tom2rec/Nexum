package com.io.nexum.model.mappers;
import com.io.nexum.model.po.Location;
import com.io.nexum.model.to.LocationDto;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface LocationMapper {
    LocationMapper INSTANCE = Mappers.getMapper(LocationMapper.class);
    LocationDto toDto(Location location);

}
