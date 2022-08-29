import React from "react";
import "./faqs.css";
import FAQs from "./FAQs.png";
import { Container } from "react-bootstrap";

export default function FAQ(){
        
    return(
        <div className="main">
            <Container>
                <div className="firt_row">
                    <h2>Frequent Questions And Answers</h2>
                    <img class="faqs_pic" src={FAQs} alt="FAQs"/>
                </div>
                <div className="sec_row">
                    <div className="column">
                        <h4>How do I know my information is secured on the platform?</h4>
                        <ans>The platform offers a secured system that protects user's information and voters</ans>
                    </div>
                    <div className="column">
                        <h4>How long will it take for my vote to be counted?</h4>
                        <ans>This is an online voting system that speeds up ballot counting process and the vote is counted 
                            immediately after the voters cast their vote in favor of their preferred candidate
                        </ans>
                    </div>
                    <div className="column">
                        <h4>Would my vote be kept a secret and secured?</h4>
                        <ans>
                            This is an online voting system that speeds up ballot counting process and the vote is counted 
                            immediately after the voters cast their vote in favor of their preferred candidate
                        </ans>
                    </div>
                    <div className="column">
                        <h4>How to get reminders about an election date?</h4>
                        <ans>
                        This is an online voting system that speeds up ballot counting process and the vote is counted 
                            immediately after the voters cast their vote in favor of their preferred candidate
                        </ans>
                    </div>
                </div>
            </Container>
        </div>


    )
}