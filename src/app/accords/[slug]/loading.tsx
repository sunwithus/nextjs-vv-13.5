import Image from 'next/image';
export default function PageLoading() {
  return (
    <div className="flex justify-center">
      <Image className=" absolute top-32" width="48" height="48" src="/images/loading.gif" alt="loading" />
    </div>
  );
}
