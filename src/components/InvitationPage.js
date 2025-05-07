import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../components/InvitationPage.css'

function InvitationPage() {
  const { id, eventId } = useParams()
  const [invitation, setInvitation] = useState(null)




  // useEffect(() => {
  //   // Try to open the app using a deep link
  //   const timeout = setTimeout(() => {
  //     // If app isn't opened, stay on this page
  //     console.log('App not detected, staying on website');
  //   }, 1500);

  //   window.location.href = `https://tiwil-invites.vercel.app/${id}/${eventId}`; // Deep link to your app

  //   // Clear timeout if the app is opened (browser gets paused)
  //   return () => clearTimeout(timeout);
  // }, [id, eventId]);

  useEffect(() => {
    fetch(`https://tiwil.designersx.com/get-subevents/fphvocco/6814baa6b48eb728011f67d0`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setInvitation(data?.subEvents?.[0]) // extract first subEvent
      })
      .catch((error) => {
        console.error('Fetch error:', error)
      })
  }, [id, eventId])

  if (!invitation) {
    return <div>Loading...</div>
  }

  const rawDate = invitation?.eventDate || invitation?.dob;

const formattedDate = rawDate
  ? new Date(rawDate).toLocaleString('en-IN', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
     
    })
  : 'Date not available';


  return (
    <div className="container">
      <div className="header">
        <img src="/images/TiwilLOGO1.png" alt="Tiwil Logo" />
      </div>

      <div
        className="card"
        style={{
          backgroundImage: invitation.eventimage
            ? `url(https://tiwil.designersx.com/${invitation.eventimage})`
            : 'url(/images/Bg-image-Event.png)'
        }}
      >
        <div className="card-content">
          <p>
            {invitation.name || 'Someone'}
            <br />
            Sent you an invitation
          </p>
          <h2>{invitation.eventType || 'Event'}</h2>
          <time>{formattedDate}</time>
        </div>
      </div>

      <button className="button">View Invitation</button>

      <div className="footer">
      Tiwil makes it simple to organize and share your special moments. Create  <strong>creatings event ,personalized invitations , wishlists , pool creations , manage your guest list,</strong> and keep track of responses—all from one place. Whether it’s birthdays, anniversaries, or family gatherings, Tiwil helps you stay organized and connected. Your event details and guest preferences are handled securely, ensuring a smooth and joyful experience for everyone involved.
        <br />
        
      </div>
    </div>
  )
}

export default InvitationPage
