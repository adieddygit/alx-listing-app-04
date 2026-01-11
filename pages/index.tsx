import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/common/PropertyCard"; // Assume this component exists

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=> {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      }catch (error) {
        console.error("Error fetching properties:", error);
        setError("Failed to load properties");
      } finally {
        setLoading(false)
      }
    };

    fetchProperties();
  }, []);

if (loading) {
    return <p className="text-center mt-10">Loading properties...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}