package com.checkin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.checkin.entity.CheckinDetails;
import com.checkin.entity.FlightDetails;
import com.checkin.repository.CheckinRepository;
@Service
public class CheckinServiceImpl implements CheckinService {
	
	@Autowired
	private CheckinRepository checkinRepo;
	long id;	
	
	public CheckinDetails findByPnrNo(long pnrNo){
		return checkinRepo.findByPnrNo(pnrNo);
		
	}

	@Override
	public void addDetails(CheckinDetails cd) {
		checkinRepo.save(cd);
		
	}

	@Override
	public List<CheckinDetails> getAllDetails() {
		
		return checkinRepo.findAll();
	}

	@Override
	public String deleteByPnrNo(long pnrNo) {
		checkinRepo.deleteByPnrNo(pnrNo);
		return "Booking ticket with PNR Number : " + pnrNo + " is cancelled... :( "+
				"Amount will Cerdited In 4-5 Working days";
	}

	

	
}
