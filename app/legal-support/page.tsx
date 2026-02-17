import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const attorneys = [
  {
    name: "Parkway Law Group",
    specialty: "Real Estate Law",
    location: "Alpharetta / Woodstock, GA",
    contact: "Direct Listing"
  },
  {
    name: "Georgia Latino Legal Services",
    specialty: "Immigration & Property",
    location: "Atlanta, GA",
    contact: "Member Directory"
  }
];

export default function LegalSupportPage() {
  return (
    <main className="min-h-screen p-12 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-blue-900">Legal Support Directory</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {attorneys.map((attorney, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-blue-700">{attorney.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Specialty:</strong> {attorney.specialty}</p>
              <p><strong>Service Area:</strong> {attorney.location}</p>
              <p><strong>Contact:</strong> {attorney.contact}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
