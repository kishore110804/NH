import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { UserCircle2 } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <div className="text-center mb-8">
        <div className="mb-4">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
            <UserCircle2 className="h-16 w-16 text-blue-600" />
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-slate-800">Dr. Sarah Connor</h1>
        <p className="text-slate-500">Clinical Psychologist</p>
      </div>

      <Card className="bg-white shadow-sm border-slate-200">
        <form className="space-y-5 p-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600">Full Name</label>
            <Input 
              defaultValue="Dr. Sarah Connor" 
              className="bg-slate-50 border-slate-200" 
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600">Email</label>
            <Input 
              type="email" 
              defaultValue="dr.sarah@therapy.com" 
              className="bg-slate-50 border-slate-200"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600">Specialization</label>
            <Input 
              defaultValue="Clinical Psychology, Cognitive Behavioral Therapy" 
              className="bg-slate-50 border-slate-200"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600">Bio</label>
            <Textarea 
              defaultValue="Experienced clinical psychologist with over 10 years of practice. Specialized in anxiety, depression, and trauma therapy."
              className="min-h-[100px] bg-slate-50 border-slate-200"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
              Save Changes
            </Button>
            <Button type="button" variant="outline" className="flex-1 border-slate-200">
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
