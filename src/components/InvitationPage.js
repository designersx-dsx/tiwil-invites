// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import '../components/InvitationPage.css'

// function InvitationPage() {
//   const { id, eventId } = useParams()
//   const [invitation, setInvitation] = useState(null)

//   // useEffect(() => {
//   //   // Try to open the app using a deep link
//   //   const timeout = setTimeout(() => {
//   //     // If app isn't opened, stay on this page
//   //     console.log('App not detected, staying on website');
//   //   }, 1500);

//   //   window.location.href = `https://tiwil-invites.vercel.app/${id}/${eventId}`; // Deep link to your app

//   //   // Clear timeout if the app is opened (browser gets paused)
//   //   return () => clearTimeout(timeout);
//   // }, [id, eventId]);

//   useEffect(() => {
//     fetch(`https://tiwil.designersx.com/get-subevents/${id}/${eventId}`, )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok')
//         }
//         return response.json()
//       })
//       .then((data) => {
//         setInvitation(data?.subEvents?.[0]) // extract first subEvent
//       })
//       .catch((error) => {
//         console.error('Fetch error:', error)
//       })
//   }, [id, eventId])

//   if (!invitation) {
//     return <div>Loading...</div>
//   }

//   const rawDate = invitation?.eventDate || invitation?.dob;

// const formattedDate = rawDate
//   ? new Date(rawDate).toLocaleString('en-IN', {
//       weekday: 'short',
//       day: '2-digit',
//       month: 'short',
//       year: 'numeric',

//     })
//   : 'Date not available';

//   return (
//     <div className="container">
//       <div className="header">
//         <img src="/images/TiwilLOGO1.png" alt="Tiwil Logo" />
//       </div>

//       <div
//         className="card"
//         style={{
//           backgroundImage: invitation.eventimage
//             ? `url(https://tiwil.designersx.com/${invitation.eventimage})`
//             : 'url(/images/Bg-image-Event.png)'
//         }}
//       >
//         <div className="card-content">
//           <p>
//             {invitation.name || 'Someone'}
//             <br />
//             Sent you an invitation
//           </p>
//           <h2>{invitation.eventType || 'Event'}</h2>
//           <time>{formattedDate}</time>
//         </div>
//       </div>

//       <button className="button">View Invitation</button>

//       <div className="footer">
//       Tiwil makes it simple to organize and share your special moments. Create  <strong>creatings event ,personalized invitations , wishlists , pool creations , manage your guest list,</strong> and keep track of responses—all from one place. Whether it’s birthdays, anniversaries, or family gatherings, Tiwil helps you stay organized and connected. Your event details and guest preferences are handled securely, ensuring a smooth and joyful experience for everyone involved.
//         <br />

//       </div>
//     </div>
//   )
// }

// export default InvitationPage

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../components/InvitationPage.css";

function InvitationPage() {
  const { id, eventId } = useParams(); // id is assumed to be relation id
  const [invitation, setInvitation] = useState(null);

  useEffect(() => {
    fetch(`https://tiwil.designersx.com/get-subevents/${id}/${eventId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setInvitation(data?.subEvents?.[0]); // extract first subEvent
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [id, eventId]);

  // const handleViewInvitation = () => {
  //   const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  //   const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  //   const isAndroid = /Android/.test(userAgent);

  //   // Deep link to app with eventId and relation id
  //   const deepLink = `tiwil://invitation/${id}/${eventId}`;

  //   // App store URLs
  //   //const appStoreUrl = 'https://www.apple.com/app-store/';
  //   const appStoreUrl = `https://testflight.apple.com/join/WYnVBhmd`;
  //   // const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.tiwil.app';
  //   // const playStoreUrl = `https://play.google.com/apps/internaltest/4700816917921803275?id=com.tiwil&referrer=${encodeURIComponent(`relationId=${id}&eventId=${eventId}`)}`;

  //   // const playStoreUrl = `https://play.google.com/apps/internaltest/4700816917921803275?id=com.tiwil&referrer=${encodeURIComponent(
  //   //   `relationId=${id}&eventId=${eventId}`

  //   // URL UPDATE ON 3-11-25
  //   // const playStoreUrl = `https://play.google.com/apps/testing/com.tiwil?referrer=${encodeURIComponent(
  //   //   `relationId=${id}&eventId=${eventId}`

  //   // URL UPDATE ON 4-11-25
  //   const playStoreUrl = `https://play.google.com/store/apps/details?id=com.tiwil&referrer=${encodeURIComponent(
  //     `relationId=${id}&eventId=${eventId}`
  //   )}`;
  //   // Attempt to open the app
  //   console.log(playStoreUrl, "playstoreurl");
  //   window.location.href = deepLink;

  //   // Fallback to app store after 1.5 seconds if app doesn't open
  //   const timeout = setTimeout(async () => {
  //     if (isIOS) {
  //       try {
  //         console.log("ios device is here");
  //         // 🔥 Post IP + relationId + eventId request to backend
  //         await axios.post(
  //           `https://tiwil.designersx.com/saveinvite/${id}/${eventId}`
  //         );
  //       } catch (error) {
  //         console.log("Save invite failed:", error);
  //       }
  //       window.location.href = appStoreUrl;
  //     } else if (isAndroid) {
  //       console.log("android device is here");
  //       window.location.href = playStoreUrl;
  //     } else {
  //       console.log("Unknown platform, staying on website");
  //     }
  //   }, 1500);

  //   // Clear timeout if the app opens
  //   return () => clearTimeout(timeout);
  // };

  // const handleViewInvitation = async () => {
  //   const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  //   const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  //   const isAndroid = /Android/.test(userAgent);

  //   const deepLink = `tiwil://invitation/${id}/${eventId}`;
  //   const appStoreUrl = `https://testflight.apple.com/join/WYnVBhmd`;
  //   const playStoreUrl = `https://play.google.com/store/apps/details?id=com.tiwil&referrer=${encodeURIComponent(
  //     `relationId=${id}&eventId=${eventId}`
  //   )}`;
  //   try {
  //     console.log("iOS device detected — saving invite...");
  //     await axios.post(
  //       `https://tiwil.designersx.com/saveinvite/${id}/${eventId}`
  //     );
  //   } catch (err) {
  //     console.log("Save invite error:", err);
  //   }
  //   // Try opening the app
  //   window.location.href = deepLink;

  //   setTimeout(async () => {
  //     if (isIOS) {
  //       window.location.href = appStoreUrl;
  //     } else if (isAndroid) {
  //       window.location.href = playStoreUrl;
  //     } else {
  //       console.log("Unknown device");
  //     }
  //   }, 1500);
  // };

  const handleViewInvitation = async () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isAndroid = /Android/.test(userAgent);

    const deepLink = `tiwil://invitation/${id}/${eventId}`;
    const appStoreUrl = `https://testflight.apple.com/join/WYnVBhmd`;
    const playStoreUrl = `https://play.google.com/store/apps/details?id=com.tiwil&referrer=${encodeURIComponent(
      `relationId=${id}&eventId=${eventId}`
    )}`;

    // 1️⃣ FIRST HIT THE API (before any redirect)
    try {
      console.log("Sending invite to server...");
      await axios.post(
        `https://tiwil.designersx.com/saveinvite/${id}/${eventId}`
      );
      console.log("API success!");
    } catch (err) {
      console.log("API failed:", err);
    }

    // 2️⃣ NOW TRY TO OPEN THE APP — after API
    setTimeout(() => {
      window.location.href = deepLink;
    }, 300); // small delay so API finishes cleanly

    // 3️⃣ FALLBACK AFTER 1.5 SECONDS
    setTimeout(() => {
      if (isIOS) {
        window.location.href = appStoreUrl;
      } else if (isAndroid) {
        window.location.href = playStoreUrl;
      } else {
        console.log("Unknown device");
      }
    }, 1800);
  };

  if (!invitation) {
    return <div>Loading...</div>;
  }

  const rawDate = invitation?.eventDate || invitation?.dob;

  const formattedDate = rawDate
    ? new Date(rawDate).toLocaleString("en-IN", {
        weekday: "short",
        day: "2-digit",
        month: "short",
      })
    : "Date not available";

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
            : "url(/images/Bg-image-Event.png)",
        }}
      >
        <div className="card-content">
          <p>
            {invitation.name || "Someone"}
            <br />
            Sent you an invitation
          </p>
          <h2>{invitation.eventType || "Event"}</h2>
          <time>{formattedDate}</time>
        </div>
      </div>

      <button className="button" onClick={handleViewInvitation}>
        View Invitation
      </button>

      <div className="footer">
        Tiwil makes it simple to organize and share your special moments. Create{" "}
        <strong>
          creatings event, personalized invitations, wishlists, pool creations,
          manage your guest list,
        </strong>{" "}
        and keep track of responses—all from one place. Whether it’s birthdays,
        anniversaries, or family gatherings, Tiwil helps you stay organized and
        connected. Your event details and guest preferences are handled
        securely, ensuring a smooth and joyful experience for everyone involved.
        <br />
      </div>
    </div>
  );
}

export default InvitationPage;
