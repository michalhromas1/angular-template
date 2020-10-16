export function throwIfAlreadyLoaded(parentModule: any, moduleName: string): void {
  if (parentModule) {
    throw new Error(
      `${moduleName} has already been loaded. Import ${moduleName} module in the AppModule only.`
    );
  }
}
