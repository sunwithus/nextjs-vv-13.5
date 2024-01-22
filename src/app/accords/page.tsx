import VkMusic from '@/components/Vk/VkMusic';

export default async function Page() {
  return (
    <>
      <div className="h-full">
        <h1>Слушать в плеере</h1>
        <VkMusic />
      </div>
    </>
  );
}
