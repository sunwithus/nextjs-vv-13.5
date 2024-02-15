import VkMusic from '@/components/Vk/VkMusic';

export default async function Page() {
  return (
    <>
      <div className="h-full min-h-96">
        <h1>Слушать в плеере</h1>
        <VkMusic />
      </div>
    </>
  );
}
