import React from 'react';
import Button from '../UIElements/Button';
import '../App.css';
import SocialCard from './SocialCard';
import {RiFacebookCircleLine} from 'react-icons/ri'

const PreviewPage = () => {
    return (
        <div className="preview-page">
            <div className="card-left">
                <div className="left-header">
                    <Button text="Facebook" fontColor="#4267B2"/>
                    <Button text="Instagram" fontColor="#898F9C"/>
                </div>
                <div className="left-body">
                    <h2>Customize Your Post</h2>
                    <p>These features and text will only appear in your Facebook post.</p>

                    <p className="input-title">Sample Text</p>

                    <textarea rows="30" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus scelerisque eleifend donec pretium vulputate. Neque convallis a cras semper. Aliquam id diam maecenas ultricies mi. Lorem donec massa sapien faucibus et molestie. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Orci porta non pulvinar neque laoreet. Odio morbi quis commodo odio aenean sed. Purus semper eget duis at. Eget mi proin sed libero enim sed faucibus turpis.">
                    
                    </textarea>
                
                
                </div>
            </div>
            <div className="card-right">
                <div className="header-right">
                    <div>
                        <h2>Preview</h2>
                        <p><RiFacebookCircleLine style={{transform : 'translateY(2px)', marginRight : '5px'}}/>Mobile News Feed</p>
                    </div>
                    <div>
                        <Button text="Preview all" fontColor="#898F9C"/>
                    </div>
                </div>
                <div className="right-body">
                    
                        <SocialCard />
                    
                </div>
            </div>
        </div>
    )
};

export default PreviewPage;