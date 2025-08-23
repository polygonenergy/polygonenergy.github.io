-- Create Edge Function for sending preorder emails
CREATE OR REPLACE FUNCTION send_preorder_email(
  customer_name TEXT,
  customer_email TEXT, 
  product_type TEXT,
  quantity INTEGER,
  device_notes TEXT DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  result JSON;
BEGIN
  -- This function will be called from the frontend
  -- The actual email sending will be handled by an Edge Function
  RETURN json_build_object(
    'success', true,
    'message', 'Preorder request processed'
  );
END;
$$;