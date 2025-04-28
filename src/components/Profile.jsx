// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../index.css";

// const Profile = () => {
//   const [profile, setProfile] = useState({
//     name: "",
//     stream: "",
//     email: "",
//     profilePicture: "",
//   });

//   const [preview, setPreview] = useState("");

//   useEffect(() => {
//     // TODO: Fetch real data from backend
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/profile`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         setProfile(res.data);
//         setPreview(res.data.profilePicture);
//       } catch (err) {
//         console.error("Failed to fetch profile", err);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProfile((prev) => ({ ...prev, profilePicture: file }));
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       Object.entries(profile).forEach(([key, value]) =>
//         formData.append(key, value)
//       );

//       await axios.put(`http://localhost:5000/api/profile`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       alert("Profile updated successfully!");
//     } catch (err) {
//       console.error("Error updating profile", err);
//       alert("Failed to update profile.");
//     }
//   };

//   return (
//     <div className="profile-container">
//       <h2>My Profile</h2>
//       <form onSubmit={handleSubmit} className="profile-form">
//         <div className="image-preview">
//           {preview && <img src={preview} alt="Profile Preview" />}
//           <input type="file" onChange={handleImageChange} />
//         </div>

//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={profile.name}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="text"
//           name="stream"
//           placeholder="Stream (Form 1E)"
//           value={profile.stream}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={profile.email}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Update Profile</button>
//       </form>
//     </div>
//   );
// };

// export default Profile;
