import React from 'react';

import WeddingPhotoLarge from '../../images/wedding/wedding-800x333.png';
import WeddingPhotoMedium from '../../images/wedding/wedding-601x250.png';
import WeddingPhotoSmall from '../../images/wedding/wedding-300x125.png';
import PeonyCorner from '../../images/wedding/peony-45.png';

import {
    InvitationWrapper,
    HeadingWrapper,
    Subtitle,
    NavBar,
    FauxLink,
    DetailsContainer,
    BorderRadiusedImage
} from './wedding-invitation.styles';


const WeddingInvitation = () => (
    <InvitationWrapper bg={PeonyCorner}>
        <HeadingWrapper>Our Wedding</HeadingWrapper>
        <Subtitle>7.24.2022 | San Fransisco Bay Area</Subtitle>

        <NavBar>
            <FauxLink>HOME</FauxLink>
            <FauxLink>STORY</FauxLink>
            <FauxLink>SCHEDULE</FauxLink>
            <FauxLink>RSVP</FauxLink>
        </NavBar>

        <picture>
                <source media="(max-width: 400px" srcSet={WeddingPhotoSmall} />
                <source media="(max-width: 800px)" srcSet={WeddingPhotoMedium} />
                <source media="(min-width: 801px)" srcSet={WeddingPhotoLarge} />
                <BorderRadiusedImage src={WeddingPhotoLarge} alt='' />
        </picture>
        
        <DetailsContainer>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </DetailsContainer>
    </InvitationWrapper>
);

export default WeddingInvitation;