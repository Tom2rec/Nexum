package com.io.nexum.repository;

import com.io.nexum.model.po.Host;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HostRepository extends JpaRepository<Host, Long> {
}
