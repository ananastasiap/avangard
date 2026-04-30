type RightImagePanelProps = {
  imageSrc: string;
};

function RightImagePanel({ imageSrc }: RightImagePanelProps) {
  return (
    <aside className="order-3 overflow-hidden rounded-[28px] border border-accent/28">
      <img
        src={imageSrc}
        alt="Reference poster used as the visual anchor for the layout"
        className="poster-float h-full min-h-90 w-full object-cover object-[28%_center]"
      />
    </aside>
  );
}

export default RightImagePanel;
