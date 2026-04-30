type RightImagePanelProps = {
  imageSrc: string;
};

function RightImagePanel({ imageSrc }: RightImagePanelProps) {
  return (
    <aside className="order-3 lg:col-span-2 xl:col-span-1 h-45 xl:h-auto overflow-hidden rounded-[28px] border border-accent/28">
      <img
        src={imageSrc}
        alt="Reference poster used as the visual anchor for the layout"
        className="poster-float h-[110%] w-full -translate-y-[5%] object-cover object-[17%_center]"
      />
    </aside>
  );
}

export default RightImagePanel;
