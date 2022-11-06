import { GetStaticProps } from 'next';
import Link from 'next/link';
import { report } from 'process';
import React, { useState } from 'react'
import Header from '../../components/Header';
import { sanityClient } from '../../sanity';
import { Report } from '../../typings'


import styles from '../../styles/report.module.css'

interface Props {
    report: Report;
}

function QRReport({ report }: Props) {

    console.log(report);
    return (
        <body className={styles.nice}>
	
    <div className="report-page-wrapper ml-auto mr-auto">
        

           <div className="report-page-container px-3 px-md-5">
            
            <img src="images/icmr_logo.png" className={styles.imagewow}/>
			<hr></hr>
			 <h4 className={styles.heading}>QR Code verified <i className="fa fa-check-square-o" aria-hidden="true"></i>, please check individual details. </h4> 
			<hr></hr>
            <div className="report-form-wrapper mt-[4%]" >
                <form>
                    <div className="d-flex">
                        <div className="flex-grow-1  mr-2">
                          <h2 className="pb-2 border-bottom text-center mb-4">Patient Information</h2>
                            <div className="form-group row">
                                <label htmlFor="colFormLabelName" className="col-sm-1 col-form-label">Patient ID</label>
                                <div className="col-sm-5 input-padding-left">
                                    <input type="text" className="form-control" id="colFormLabelName" placeholder="Name" value="YCMPM313478." />
                                </div>
								<label htmlFor="colFormLabelName" className="col-sm-1 col-form-label">Name:</label>
                                <div className="col-sm-5 input-padding-left">
                                    <input type="text" className="form-control" id="colFormLabelName" placeholder="Name" value={report.name} />
                                </div>								
                            </div>	
							
							<div className="form-group row">
                                <label htmlFor="colFormLabelName" className="ml-[0px] col-sm-1 col-form-label">Age:</label>
                                <div className="col-sm-5 input-padding-left">
                                    <input type="text" className="form-control" id="colFormLabelName" placeholder="Email" value={report.age} />
                                </div>
                                <label htmlFor="colFormLabelName" className="col-sm-1 col-form-label">Gender:</label>
                                <div className="col-sm-5 input-padding-left">
                                    <input type="text" className="form-control" id="colFormLabelName" value="M" />
                                </div>								
                            </div>
																					
                        </div>
                     </div>
					
                <h2 className="pb-2 border-bottom mb-12">Specimen Information</h2>
				  
				

                    <div className="form-group row">
					
                        <label htmlFor="colFormLabelSample" className="col-sm-1 col-form-label col-form-label">ICMR  ID:</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control" id="colFormLabelSample" value="776635687" />
                        </div>						
						
						<label htmlFor="colFormLabelSample" className="col-sm-1 col-form-label col-form-label">SRF  ID:</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control" id="colFormLabelSample" value="SRF ID is not available" />
                        </div>
						
						<label htmlFor="colFormLabelSample" className="col-sm-1 col-form-label col-form-label">Result of SARS-CoV2:</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control" id="colFormLabelSample" value="Positive" />
                        </div>
						
						
						<label htmlFor="colFormLabelSample" className="col-sm-1 col-form-label col-form-label">Specimen Type:</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control" id="colFormLabelSample" value="Nasopharyngeal &amp; Oropharyngeal" />
                        </div>
						
                        <label htmlFor="colFormLabelSample" className="col-sm-1 col-form-label col-form-label">Report  ID:</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control" id="colFormLabelSample" value="YCMPM313472." />
                        </div>						
					    <label htmlFor="colFormLabelSample" className="col-sm-1 col-form-label col-form-label">Date  of onset of illness:</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control" id="colFormLabelSample" value="N/A" />
                        </div>						
						<label htmlFor="colFormLabelSample" className="col-sm-1 col-form-label col-form-label">Date Time of Sample Collection:</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control" id="colFormLabelSample" value="01-11-2022 10:05:59" />
                        </div>
						
						<label htmlFor="colFormLabelSample" className="col-sm-1 col-form-label col-form-label">Date Time of Receipt of Specimen at Lab:</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control" id="colFormLabelSample" value="01-11-2022 10:30:59" />
                        </div>
						
						<label htmlFor="colFormLabelSample" className="col-sm-1 col-form-label col-form-label">Date of Sample Testing:</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control" id="colFormLabelSample" value="01-11-2022 16:30:59" />
                        </div>
						<label htmlFor="colFormLabelSample" className="col-sm-1 col-form-label col-form-label">Date of Sample Testing:</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control" id="colFormLabelSample" value="01-11-2022 16:30:59" />
                        </div>
						
					</div>
                    
                </form>
            </div>
            
			<div className="text-right mb-3">
                <span>Checked and Approved by: <br></br><br></br><br></br></span>
				<p>----------------------------</p>
            </div>						
            
            <div className="text-center">
                <h4 className="jal-blue mb-2">Note: The results relate only to the specimens tested and should be correlated with clinical findings. </h4>
            </div>
						
        </div>
    </div>
    
<div data-flash-app-container="true" id="flash_player_app_root"></div>
</body>
    )
}

export default QRReport

export const getStaticPaths = async () => {
    const query = `*[_type =="report"]{
        _id,
        patientid,
        age,
        name,
        gender,
        country,
        aadhar,
        contactno,
        passportno,
        icmrid,
        srfid,
        resultofsars,
        testtype,
        qrurl,
        specimentype,
        reportid,
        datetimeofcollection,
        datetimeofreceived,
        datetimeofsampletesting,
        datetimeofresultreported,
        slug,
      }`;
    const reports = await sanityClient.fetch(query);
    const paths = reports.map((report: Report) => ({
        params: {
            slug: report.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type =="report" && slug.current == $slug][0]{
        _id,
        patientid,
        age,
        name,
        gender,
        country,
        aadhar,
        contactno,
        passportno,
        icmrid,
        srfid,
        qrurl,
        resultofsars,
        testtype,
        specimentype,
        reportid,
        datetimeofcollection,
        datetimeofreceived,
        datetimeofsampletesting,
        datetimeofresultreported,
        slug,
      }`
    const report = await sanityClient.fetch(query, {
        slug: params?.slug,
    });

    if (!report) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            report,
        },
        revalidate: 60,
    };
}