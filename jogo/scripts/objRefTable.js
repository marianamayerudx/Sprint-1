const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.OnMove,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Platform.Cnds.OnStop
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Sprite2: 0},
	{Sólido: 0},
	{Sprite3: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{Sprite4: 0},
	{Teclado: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {}
}