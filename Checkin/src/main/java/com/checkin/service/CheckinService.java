package com.checkin.service;

import java.util.List;

import com.checkin.entity.CheckinDetails;
import com.checkin.entity.FlightDetails;

public interface CheckinService {
	
	public void addDetails(CheckinDetails userDetails); 
	public CheckinDetails findByPnrNo(long pnrNo);
	public List<CheckinDetails> getAllDetails();
	public String deleteByPnrNo(long pnrNo);
	
}
