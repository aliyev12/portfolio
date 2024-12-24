const myPhoto = new Proxy({"src":"/_astro/default-avatar.B4-9h7ES.svg","width":602,"height":602,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/abdulaliyev/projects/portfolio/src/images/default-avatar.svg";
							}
							
							return target[name];
						}
					});

export { myPhoto as m };
