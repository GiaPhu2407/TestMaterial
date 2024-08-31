"use client";
import { useEffect } from "react";

export default function Home() {
  // Define the addHotel function
  const addHotel = async () => {
    const newHotel = {
      title: "Hotel C",
      description: "A cozy hotel in the mountains.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeLmzq6ZX0GHuV-EvSwwOty6_488Q9gfTKRg&s",
    };

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newHotel),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Hotel created:", result);
      } else {
        console.error("Failed to create hotel");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Use useEffect to call the function on component mount
  useEffect(() => {
    addHotel();
  }, []); // Empty dependency array means this runs once when the component mounts

  // The return statement of the component should return JSX
  return (
    <div>
      <h1>Welcome to the Hotel Management System</h1>
    </div>
  );
}
