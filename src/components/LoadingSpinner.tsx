import Image from 'next/image';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <Image 
        src="/loading.png" 
        alt="Loading" 
        width={128} 
        height={128} 
        className="animate-spin" 
      />
    </div>
  );
} 