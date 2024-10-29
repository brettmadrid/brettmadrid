export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/cover": {
        return <div key={block.id}>Puffy</div>;
      }
      default:
        return null;
    }
  });
};
