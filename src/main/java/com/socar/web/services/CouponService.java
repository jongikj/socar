package com.socar.web.services;

import org.springframework.stereotype.Component;

import com.socar.web.domains.CouponDTO;

@Component
public interface CouponService {
    public CouponDTO coupCount(String couponCount);
    public CouponDTO takeCoupon(CouponDTO coup);
}
