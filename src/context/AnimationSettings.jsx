import React from "react";

const Context = React.createContext(null);

export const AnimationSettingsProvider = ({
  children,
  initialDensity = 24,
  initialSpeed = 0.4,
}) => {
  const [density, setDensity] = React.useState(initialDensity);
  const [speed, setSpeed] = React.useState(initialSpeed);

  return (
    <Context.Provider value={{ density, speed, setDensity, setSpeed }}>
      {children}
    </Context.Provider>
  );
};

export const useAnimationSettings = () => {
  const ctx = React.useContext(Context);
  if (!ctx) throw new Error("useAnimationSettings must be used within AnimationSettingsProvider");
  return ctx;
};