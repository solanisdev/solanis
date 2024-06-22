'use client';
export default function UserItem() {
    return <div className="flex items-center p-4 rounded-xl gap-4 h-10">
      <div className="avatar rounded-full min-h-12 min-w-12 bg-yellow-500 font-[700] flex justify-center items-center">
        <p>GR</p>
      </div>
      <div>
      <p className="font-bold text-[16px]">gustavorteuber</p>
      <p className="text-[14px]">gustavorteuber@dev.com</p>    
      </div>
    </div>
}