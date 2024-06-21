'use client';
export default function UserItem() {
    return <div className="flex items-center gap-2 p-2 border-b rounded-[16-px]">
      <div className="avatar rounded-full min-h-12 min-w-12 bg-emerald-500 font-[700] flex justify-center items-center">
        <p>GR</p>
      </div>
      <div>
      <p className="font-bold text-[16px]">gustavorteuber</p>
      <p className="text-[14px]">gustavorteuber@dev.com</p>    
      </div>
    </div>
}