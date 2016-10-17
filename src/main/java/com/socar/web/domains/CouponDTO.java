package com.socar.web.domains;

import java.io.Serializable;

import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Component
@Data
public class CouponDTO implements Serializable{

    private static final long serialVersionUID = 1L;
    @Getter @Setter private String optionHeader,optionDetail,imgName,dcOption,couponName,dc;
    @Getter @Setter private int couponMasterSeq,openDateStart,openDateEnd,epDate,couponCount,couponSeq,couponMember;
}
