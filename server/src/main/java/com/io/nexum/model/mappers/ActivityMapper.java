package com.io.nexum.model.mappers;

import com.io.nexum.model.po.Activity;
import com.io.nexum.model.po.Location;
import com.io.nexum.model.to.ActivityDto;
import com.io.nexum.model.to.LocationDto;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ActivityMapper {
    ActivityMapper INSTANCE = Mappers.getMapper(ActivityMapper.class);
    ActivityDto toDto(Activity activity);

}