import { helpers } from 'utils';

export default (portfolioNodes, mediaNodes) => {
  let projects = [];

  // First iterating through portfolio nodes
  portfolioNodes.forEach(portfolioNode => {
    let project = { ...portfolioNode };
    // Remove scf field from project object to add acf fields later one by one
    if (project.acf) {
      delete project.acf;
      // Extracting acf fields from scf object and spreading them all one by one into project
      project = {
        ...project,
        ...portfolioNode.acf,
      };

      // Checking if project has additional images and is there are media nodes
      if (
        project.addingAdditionalImages &&
        project.additionalImages &&
        project.additionalImages.length &&
        Array.isArray(project.additionalImages) &&
        mediaNodes &&
        mediaNodes.length &&
        Array.isArray(mediaNodes)
      ) {
        // Add image source and alt text to additional image prop extracting them form media node
        const newAdditionalImages = project.additionalImages.map(
          additionalImage => {
            if (additionalImage.imgId) {
              const image = mediaNodes.find(
                mediaNode => mediaNode.wordpress_id === additionalImage.imgId
              );
              if (image) {
                return {
                  ...additionalImage,
                  src: image.source_url,
                  alt: image.alt_text,
                  localFile: image.localFile,
                };
              }
            }
            return additionalImage;
          }
        );

        project = {
          ...project,
          additionalImages: newAdditionalImages,
        };
      }

      projects.push(project);
    }
  });

  return helpers.sortArrObj(projects, 'weight');
};
