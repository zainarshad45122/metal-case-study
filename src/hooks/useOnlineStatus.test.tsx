import { act, renderHook } from "@testing-library/react"

import useOnlineStatus from "./useOnlineStatus"

describe( "useOnlineStatus Hook", () => {
  test( "returns true when online and false when offline", () => {
    jest.spyOn( navigator, "onLine", "get" ).mockReturnValueOnce( true )
    
    const { result } = renderHook( () => useOnlineStatus() )

    expect( result.current ).toBe( true )

    // Mocking offline status
    act( () => {
      jest.spyOn( navigator, "onLine", "get" ).mockReturnValueOnce( false )
      window.dispatchEvent( new Event( "offline" ) )
    } )

    expect( result.current ).toBe( false )
  } )
} )
